import { useDebounce } from '@/hooks/useDebounce'
import React from 'react'
import styled from 'styled-components'
import { Spinner } from '../Spinner'

const Wrapper = styled.div`
  position: relative;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 8;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`

interface LoadingContainerProps {
  children?: React.ReactNode
  loading?: boolean
  overlay?: boolean
  placeholder?: React.ReactNode
}

/**
 * A simple component that wraps any React children with a spinner inside an overlay.
 *
 * For UX purpose, the overlay is debounced.
 * It will only start showing after 200ms when the loading is set to true.
 * So, the spinner won't blink for fast loading times.
 */
export const LoadingContainer: React.FC<LoadingContainerProps> = ({
  children,
  loading,
  overlay = true,
  placeholder = null,
}: LoadingContainerProps) => {
  const debouncedLoading = useDebounce(loading, 200)
  return (
    <Wrapper>
      {debouncedLoading && overlay && (
        <Overlay>
          <Spinner />
        </Overlay>
      )}
      {overlay ? children : (!loading && children) || placeholder}
    </Wrapper>
  )
}
