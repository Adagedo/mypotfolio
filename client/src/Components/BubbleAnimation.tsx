function BubbleAnimation() {
  return (
    <>
      <div className="bubbles absolute">
        <span style={{ "--i": 20 } as React.CSSProperties}></span>
        <span style={{ "--i": 17 } as React.CSSProperties}></span>
        <span style={{ "--i": 10 } as React.CSSProperties}></span>
      </div>
    </>
  );
}

export default BubbleAnimation;
