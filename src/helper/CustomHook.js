import React, { useState, useRef, useCallback, useEffect } from 'react'

// To get the previous props or state
export const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }