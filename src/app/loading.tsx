import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
    <div key={id} className="grid-flow-col grid-cols-3 gap-12">
      <Skeleton className="object-none mx-auto w-32 h-32 rounded-full  bg-gray-200" />
      <Skeleton className="h-10 w-full p-6 mb-4 bg-gray-100" />
    </div>
  ));
}
