import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function CommentThread() {
  return (
    <Card className="mt-10">
      <h2 className="font-serif text-2xl text-cream">Comments</h2>
      <p className="mt-2 text-sm text-cream/58">
        Comments are moderated before publication.
      </p>
      <form className="mt-5 grid gap-3">
        <Input name="author_name" placeholder="Name" />
        <Textarea name="body" placeholder="Add a thoughtful comment" />
        <Button className="w-fit" type="submit">
          Submit Comment
        </Button>
      </form>
    </Card>
  );
}
