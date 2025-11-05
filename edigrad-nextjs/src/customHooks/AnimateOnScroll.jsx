import React from 'react'
import UseOnScreen from './useOnScreen';

const AnimateOnScroll =  ({ children, threshold = 0.1, delay = 0, className = '' }) => {
  const [ref, isVisible] = UseOnScreen({ threshold });

  // We must use React.cloneElement to pass the ref and classes
  // to the child component.
  if (!React.isValidElement(children)) {
    return children;
  }

  const childClassName = children.props.className || '';
  const combinedClassName = `${childClassName} scroll-fade-in ${isVisible ? 'is-visible' : ''} ${className}`.trim();

  return React.cloneElement(children, {
    ref: ref,
    className: combinedClassName,
    style: {
      ...children.props.style,
      // Apply the stagger delay
      transitionDelay: `${delay}ms`,
    },
  });
}

export default AnimateOnScroll