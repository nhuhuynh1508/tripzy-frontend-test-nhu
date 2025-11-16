import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function Blank() {
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
