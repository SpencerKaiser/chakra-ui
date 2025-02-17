import { chakra, forwardRef, HTMLChakraProps } from "@chakra-ui/system"
import { useTableStyles } from "./table"

export interface TableCellProps extends HTMLChakraProps<"td"> {
  /**
   * Aligns the cell content to the right
   */
  isNumeric?: boolean
}
export const Td = forwardRef<TableCellProps, "td">(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles()

    return (
      <chakra.td
        role="gridcell"
        {...rest}
        ref={ref}
        __css={styles.td}
        data-is-numeric={isNumeric}
      />
    )
  },
)
