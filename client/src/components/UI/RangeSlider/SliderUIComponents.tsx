import * as React from 'react'
import './RangeSlider.scss'
import {
  GetRailProps,
  GetHandleProps,
  GetTrackProps,
  SliderItem,
} from 'react-compound-slider';

// *******************************************************
// RAIL
// *******************************************************

interface SliderRailProps {
  getRailProps: GetRailProps
}

export const SliderRail: React.FC<SliderRailProps> = ({ getRailProps }) => {
  return (
    <>
      <div className="range-slider__rail-outer-style" {...getRailProps()} />
      <div className="range-slider__rail-inner-style" />
    </>
  )
}

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
interface HandleProps {
  domain: number[]
  handle: SliderItem
  getHandleProps: GetHandleProps
  disabled?: boolean
}

export const Handle: React.FC<HandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent },
  disabled = false,
  getHandleProps,
}) => {
  return (
    <>
      <div
        className="range-slider__handle-icon"
        style={{
          left: `${percent}%`
        }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        className={disabled ? "range-slider__handle range-slider__handle_disabled" : "range-slider__handle"}
        style={{
          left: `${percent}%`,
        }}
      />
    </>
  )
}


// *******************************************************
// ProgressLine COMPONENT
// *******************************************************
interface ProgressLineProps {
  source: SliderItem
  target: SliderItem
  getTrackProps: GetTrackProps
  disabled?: boolean
}

export const ProgressLine: React.FC<ProgressLineProps> = ({
  source,
  target,
  getTrackProps,
  disabled = false,
}) => {
  return (
    <div
      className={disabled ? "range-slider__progress-line range-slider__progress-line_disabled" : "range-slider__progress-line"}
      style={{
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  )
}
