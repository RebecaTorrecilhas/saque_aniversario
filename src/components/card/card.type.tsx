export type CardSize = "card-sm" | "card-md" | "card-lg";

export type CardProps = {
    children: React.ReactNode,
    size: CardSize
}