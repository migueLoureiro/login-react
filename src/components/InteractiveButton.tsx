import React from 'react';

function InteractiveButton({ title, children }: { title: string, children: string }) {
    return (
      <button>{children}</button>
    );
}
  
export default InteractiveButton;
