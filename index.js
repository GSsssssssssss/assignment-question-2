function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  
  let highlightedContent = [];

  
  let currentPosition = 0;

  // Loop through each word position in plainTextPositions
  for (const { start, end } of plainTextPositions) {
    // Find the corresponding word in the plainText
    const word = plainText.slice(start, end);

    
    const index = htmlContent.indexOf(word, currentPosition);

    if (index !== -1) {
      // Add the non-highlighted content to the array
      highlightedContent.push(htmlContent.slice(currentPosition, index));

      // Add the highlighted content using the <mark> tag
      highlightedContent.push(`<mark>${htmlContent.slice(index, index + word.length)}</mark>`);

      // Update the current position to the end of the matched word
      currentPosition = index + word.length;
    }
  }

  // Add any remaining non-highlighted content after the last match
  if (currentPosition < htmlContent.length) {
    highlightedContent.push(htmlContent.slice(currentPosition));
  }

  // Join the array elements to form the final highlighted HTML content
  return highlightedContent.join('');
}

module.exports = highlightHTMLContent;