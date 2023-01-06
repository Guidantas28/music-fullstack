import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
} from '@chakra-ui/react'
import ReactHowler from 'react-howler'
import { useEffect, useRef, useState } from 'react'
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from 'react-icons/md'
import { useStoreActions } from 'easy-peasy'

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true)
  const [index, setIndex] = useState(0)
  const [seek, setSeek] = useState(0.0)
  const [duration, setDuration] = useState(0.0)
  const [shuffle, setShuffle] = useState(false)
  const [repeat, setRepeat] = useState(false)

  const setPlayState = (value) => {
    setPlaying(value)
  }

  const onShuffle = () => {
    setShuffle((state) => !state)
  }
  const onRepeat = () => {
    setRepeat((state) => !state)
  }

  return (
    <Box>
      <Box>
        <ReactHowler playing={playing} src={activeSong?.url} />
      </Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            onClick={onShuffle}
            color={shuffle ? 'white' : 'gray.500'}
            icon={<MdShuffle />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="skip"
            fontSize="24px"
            icons={<MdSkipPrevious />}
          />
          {playing ? (
            <IconButton
              outline="none"
              variant="link"
              aria-label="pause"
              color="white"
              fontSize="40px"
              icon={<MdOutlinePauseCircleFilled />}
              onClick={() => setPlayState(false)}
            />
          ) : (
            <IconButton
              outline="none"
              variant="link"
              aria-label="play"
              color="white"
              fontSize="40px"
              icon={<MdOutlinePlayCircleFilled />}
              onClick={() => setPlayState(true)}
            />
          )}

          <IconButton
            outline="none"
            variant="link"
            aria-label="next"
            fontSize="24px"
            icon={<MdSkipNext />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="repeat"
            onClick={onRepeat}
            color={repeat ? 'white' : 'gray.600'}
            fontSize="24px"
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="xs">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              aria-label={['min', 'max']}
              step={0.1}
              min={0}
              max={321}
              id="player-range"
              colorScheme="green"
            >
              <RangeSliderTrack BG="gray.800">
                <RangeSliderFilledTrack BG="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="xs">5:21</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Player
