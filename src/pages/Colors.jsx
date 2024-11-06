Colors.propTypes = {};
export function Colors() {
  return (
    <div className="container p-12 flex justify-center items-start">
      <div className="flex gap-2 flex-wrap">
        <div className="p-4 bg-border">border</div>
        <div className="p-4 bg-input">input</div>
        <div className="p-4 bg-ring">ring</div>
        <div className="p-4 bg-gradient">gradient</div>
        <div className="p-4 bg-background">background</div>
        <div className="p-4 bg-foreground">foreground</div>
        <div className="p-4 bg-primary">primary</div>
        <div className="p-4 bg-primary-foreground">primary-foreground</div>
        <div className="p-4 bg-secondary">secondary</div>
        <div className="p-4 bg-secondary-foreground">secondary-foreground</div>
        <div className="p-4 bg-destructive">destructive</div>
        <div className="p-4 bg-destructive-foreground">
          destructive-foreground
        </div>
        <div className="p-4 bg-muted">muted</div>
        <div className="p-4 bg-muted-foreground">muted-foreground</div>
        <div className="p-4 bg-accent">accent</div>
        <div className="p-4 bg-accent-foreground">accent-foreground</div>
        <div className="p-4 bg-popover">popover</div>
        <div className="p-4 bg-popover-foreground">popover-foreground</div>
        <div className="p-4 bg-card">card</div>
        <div className="p-4 bg-card-foreground">card-foreground</div>

        <div className="p-4 bg-success">success</div>
        <div className="p-4 bg-success-foreground">success-foreground</div>
      </div>
    </div>
  );
}
