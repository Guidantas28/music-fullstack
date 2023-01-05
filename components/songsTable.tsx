import { Box } from '@chakra-ui/layout'
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'

const SongsTable = ({ songs }) => {
  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            colorScheme="green"
            size="lg"
            isRound
            aria-label="play"
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Data Added</Th>
              <Th>
                <AiOutlineClockCircle fontSize="20px" />
              </Th>
            </Tr>
          </Thead>
        </Table>
      </Box>
    </Box>
  )
}

export default SongsTable
