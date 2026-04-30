'use client'
import { Button } from 'baseui/button'
import { Checkbox } from 'baseui/checkbox'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'

export default function ClientComponent() {
  return (
    <FlexGrid>
      <FlexGridItem>
        <Checkbox>Check this box</Checkbox>
      </FlexGridItem>
      <FlexGridItem>
        <Button>Click me</Button>
      </FlexGridItem>
    </FlexGrid>
  )
}
