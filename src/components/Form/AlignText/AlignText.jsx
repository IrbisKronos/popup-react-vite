import React from 'react';
import './AlignText.css';
import AlignInput from './AlignInput/AlignInput';

export default function AlignText({ context, DataBound }) {
  const DataBoundAlignInput = DataBound(AlignInput);

  return (
    <div className='segmentedControl' id='align_text_select'>
      <DataBoundAlignInput
        debug
        value='left'
        id='headerLeft'
        icon='format_align_left'
        className='segmentedControl1'
        context={context}
        defaultChecked={context.alignText === 'left'}
      />

      <DataBoundAlignInput
        debug
        value='center'
        id='headerCenter'
        icon='format_align_center'
        className='segmentedControl2'
        context={context}
        defaultChecked={context.alignText === 'center'}
      />

      <DataBoundAlignInput
        debug
        value='right'
        id='headerRight'
        icon='format_align_right'
        className='segmentedControl3'
        context={context}
        defaultChecked={context.alignText === 'right'}
      />

      <DataBoundAlignInput
        debug
        value='justify'
        id='headerJustify'
        icon='format_align_justify'
        className='segmentedControl4'
        context={context}
        defaultChecked={context.alignText === 'justify'}
      />

      <div className='segmentedControlColor'></div>
    </div>
  );
}
