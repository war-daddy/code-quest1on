import React from 'react'
import Type from './Type'

function Main() {
   const array = { 
        type:'Array'
        ,linka:"https://practice.geeksforgeeks.org/problems/peak-element/1"
        ,linkb:"https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1"
        ,linkc:"https://practice.geeksforgeeks.org/problems/reverse-an-array/0"
        ,linkd:'https://practice.geeksforgeeks.org/problems/sort-the-array0055/1'
        ,linke:'https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1'

       }
    const linkedlist = {
        type:'Linkedlist',
        linka:'https://www.geeksforgeeks.org/search-an-element-in-a-linked-list-iterative-and-recursive/'
        ,linkb:'https://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/'
        ,linkc:'https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1'
        ,linkd:'https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1'
        ,linke:'https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1'
        
    }   
    const stack = {
        type:'Stack',
        linka:'https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/'
        ,linkb:'https://www.geeksforgeeks.org/next-greater-element/'
        ,linkc:'https://practice.geeksforgeeks.org/problems/sort-a-stack/1'
        ,linkd:'https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1?page=1&category[]=Stack&sortBy=submissions'
        ,linke:'https://practice.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1?page=2&category[]=Stack&sortBy=submissions'
    }
    const queue = {
        type:'Queue'
        ,linka:'https://www.geeksforgeeks.org/reversing-a-queue/'
        ,linkb:'https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/'
        ,linkc:'https://practice.geeksforgeeks.org/problems/circular-tour-1587115620/1'
        ,linkd:'https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1'
        ,linke:'https://practice.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1'
    }
    const tree = {
        type:'Tree'
        ,linka:'https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1'
        ,linkb:'https://practice.geeksforgeeks.org/problems/determine-if-two-trees-are-identical/1'
        ,linkc:'https://practice.geeksforgeeks.org/problems/mirror-tree/1'
        ,linkd:'https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1'
        ,linke:'https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1'

    }
    const graph = {
        type:'Graph'
        ,linka:'https://practice.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1'
        ,linkb:'https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1/'
        ,linkc:'https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1'
        ,linkd:'https://practice.geeksforgeeks.org/problems/number-of-provinces/1'
        ,linke:'https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1'
    }
  return (
    <div className='main'>
     <div className="data" style={{marginTop:'30px'}}>
      <Type links = {array} />
      <Type links = {linkedlist} />
      <Type links = {stack} />
      <Type links = {queue} />
      <Type links = {tree} />
      <Type links = {graph} />
     </div>
    </div>
  ) 
}

export default Main