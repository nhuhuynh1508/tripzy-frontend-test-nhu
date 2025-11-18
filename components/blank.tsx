
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
} from "@/components/ui/empty"

export default function Blank() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyDescription>
          No Data
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
