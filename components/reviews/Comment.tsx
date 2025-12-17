'use client';

import { useState } from 'react';
import { Button } from '../ui/button';

function Comment({ comment }: { comment: string }) {

  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const longComment = comment.length > 130;
  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment;

  return (
    <div>
      <p className='text-sm font-Vazir text-right'>{displayComment}</p>
      {longComment && (
        <Button
          variant='link'
          className='pl-0 text-muted-foreground font-Vazir'
          onClick={toggleExpanded}
        >
          {isExpanded ? 'نمایش کمتر' : 'نمایش بیشتر'}
        </Button>
      )}
    </div>
  );
}
export default Comment;
