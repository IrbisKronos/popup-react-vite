import React from 'react';
import './AnimationBlock.css';
import AnimationItem from './AnimationItem/AnimationItem';

export default function AnimationBlock() {
  return (
    <div className='animation-block'>
      {/* Attention seekers */}
      <AnimationItem
        animation='animate__bounce'
        label='Bounce'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__flash'
        label='Flash'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__pulse'
        label='Pulse'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__rubberBand'
        label='Rubber Band'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__shakeX'
        label='ShakeX'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__shakeY'
        label='ShakeY'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__swing'
        label='Swing'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__tada'
        label='Tada'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__wobble'
        label='Wobble'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__jello'
        label='Jello'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__heartBeat'
        label='Heart Beat'
        labelSimbol='auto_awesome'
      />

      {/* Back entrances */}
      <AnimationItem
        animation='animate__backInDown'
        label='Back In Down'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__backInLeft'
        label='Back In Left'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__backInRight'
        label='Back In Right'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__backInUp'
        label='Back In Up'
        labelSimbol='auto_awesome'
      />

      {/* Back exits */}
      <AnimationItem
        animation='animate__backOutDown'
        label='Back Out Down'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__backOutLeft'
        label='Back Out Left'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__backOutRight'
        label='Back Out Right'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__backOutUp'
        label='Back Out Up'
        labelSimbol='auto_awesome'
      />

      {/* Bouncing entrances */}
      <AnimationItem
        animation='animate__bounceIn'
        label='Bounce In'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__bounceInDown'
        label='Bounce In Down'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__bounceInLeft'
        label='Bounce In Left'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__bounceInRight'
        label='Bounce In Right'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__bounceInUp'
        label='Bounce In Up'
        labelSimbol='auto_awesome'
      />

      {/* Fading entrances */}
      <AnimationItem
        animation='animate__fadeIn'
        label='Fade In'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInDown'
        label='Fade In Down'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInDownBig'
        label='Fade In Down Big'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInLeft'
        label='Fade In Left'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInLeftBig'
        label='Fade In Left Big'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInRight'
        label='Fade In Right'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInRightBig'
        label='Fade In Right Big'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInUp'
        label='Fade In Up'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInUpBig'
        label='Fade In Up Big'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInTopLeft'
        label='Fade In Top Left'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInTopRight'
        label='Fade In Top Right'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInBottomLeft'
        label='Fade In Bottom Left'
        labelSimbol='auto_awesome'
      />
      <AnimationItem
        animation='animate__fadeInBottomRight'
        label='Fade In Bottom Right'
        labelSimbol='auto_awesome'
      />
    </div>
  );
}
