import React, { useState } from "react";
import GradientButton from "../GradientButton";
import axios from "axios";
import { Discuss } from "react-loader-spinner";
import { motion } from "framer-motion";

const API_ROOT = import.meta.env.VITE_API_ROOT;

function ContactSection() {
	const [formLog, setFormLog] = useState<string | null>(null);
	const [formStatus, setFormStatus] = useState<"success" | "error" | null>(
		null
	);
	const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);

	const handleContactMessaging = async (e: React.FormEvent) => {
		setIsSendingMessage(true);
		e.preventDefault();

		const { email, sender, message } = e.target as HTMLFormElement;

		await axios
			.post(
				`${API_ROOT}/email`,
				{
					email: email.value,
					sender: sender.value,
					message: message.value,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then(() => {
				setIsSendingMessage(false);
				setFormStatus("success");
				setFormLog("Message sent successfully.");
				(e.target as HTMLFormElement).reset();
			})
			.catch(() => {
				setIsSendingMessage(false);
				setFormStatus("error");
				setFormLog("An error occurred, Try again.");
			});

		window.setTimeout(() => {
			setFormStatus(null);
			setFormLog(null);
		}, 5000);
	};

	return (
		<>
			<motion.section
				initial={{ opacity: 0, translateY: 100 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				transition={{ delay: 0, duration: 1 }}
				className="mt-[12em] bg-secondary-background"
				id="contact">
				<div className="w-[1024px] mx-auto py-8 grid grid-cols-2 gap-8 max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em] max-[675px]:grid-cols-1 max-[675px]:gap-20">
					<div className="flex flex-col items-start gap-6">
						<div className="">
							<h2 className="text-2xl">Have any project idea?</h2>
							<span className="text-slate-500">
								Ready to turn your ideas into reality? Reach out today, and
								let's embark on a journey of digital transformation together.
							</span>
						</div>

						<GradientButton text="Contact now" />
					</div>

					<div className="">
						<h3 className="border border-green-cool w-max py-2 px-8 rounded-ss-3xl rounded-ee-3xl">
							Send me a message
						</h3>
						{formLog && (
							<span
								className={`${
									formStatus === "success" ? "text-green-500" : "text-red-500"
								} inline-block mt-8`}>
								{formLog}
							</span>
						)}
						<form action="" method="post" onSubmit={handleContactMessaging}>
							<div className="mt-16 grid grid-cols-2 gap-4">
								<div className="relative">
									<input
										type="text"
										id="name"
										name="sender"
										className="outline-none border-b border-green-cool bg-inherit w-full text-sm caret-green-cool contact-input"
										required
									/>
									<label
										htmlFor="name"
										className="absolute bottom-1 left-0 text-sm text-slate-400 transition-all duration-300">
										Name*
									</label>
								</div>
								<div className="relative">
									<input
										type="email"
										id="email"
										name="email"
										className="outline-none border-b border-green-cool bg-inherit w-full text-sm caret-green-cool contact-input"
										required
									/>
									<label
										htmlFor="email"
										className="absolute bottom-1 left-0 text-sm text-slate-400 transition-all duration-300">
										Email*
									</label>
								</div>
							</div>
							<div className="relative mt-16">
								<textarea
									name="message"
									id="message"
									required
									className="resize-none outline-none border-b border-green-cool bg-inherit w-full text-sm caret-green-cool contact-textarea"></textarea>
								<label
									htmlFor="message"
									className="absolute bottom-3 left-0 text-sm text-slate-400 transition-all duration-300">
									Message*
								</label>
							</div>

							<button className="w-max mt-12 bg-green-cool text-slate-500 rounded-full py-2 px-12 hover:bg-green-200 transition-all duration-300 flex items-center gap-2">
								Send Message
								<Discuss
									visible={isSendingMessage}
									height="25"
									width="25"
									ariaLabel="discuss-loading"
									wrapperStyle={{}}
									wrapperClass="discuss-wrapper"
									colors={["#000", "#000"]}
								/>
							</button>
						</form>
					</div>
				</div>
			</motion.section>
		</>
	);
}

export default ContactSection;
