import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  name: string
  location: string
  testimony: string
  image?: string
}

export default function TestimonialCard({ name, location, testimony, image }: TestimonialCardProps) {
  // Get initials for avatar fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10">
            {image && <AvatarImage src={image || "/placeholder.svg"} alt={name} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="mb-1 font-medium">{name}</div>
            <div className="text-sm text-muted-foreground">{location}</div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-muted-foreground">"{testimony}"</p>
        </div>
      </CardContent>
    </Card>
  )
}
