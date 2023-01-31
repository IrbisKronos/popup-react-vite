import React from 'react';
import './AlignText.css';
import AlignInput from './AlignInput/AlignInput';

function AlignText({ context, DataBound }) {
  const DataBoundAlignInput = DataBound(AlignInput);

  return (
    <div className='segmentedControl' id='align_text_select'>
      <DataBoundAlignInput
        debug
        type='radio'
        name='alignText'
        value='left'
        id='headerLeft'
        icon='format_align_left'
        className='segmentedControl1'
        context={context}
        defaultChecked
      />

      <DataBoundAlignInput
        debug
        type='radio'
        name='alignText'
        value='center'
        id='headerCenter'
        icon='format_align_center'
        className='segmentedControl2'
        context={context}
      />

      <DataBoundAlignInput
        debug
        type='radio'
        name='alignText'
        value='right'
        id='headerRight'
        icon='format_align_right'
        className='segmentedControl3'
        context={context}
      />

      <DataBoundAlignInput
        debug
        type='radio'
        name='alignText'
        value='justify'
        id='headerJustify'
        icon='format_align_justify'
        className='segmentedControl4'
        context={context}
      />

      <div className='segmentedControlColor'></div>
    </div>
  );
}

export default AlignText;
