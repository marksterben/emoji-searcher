export const searchEmojis = (emojisData, searchText = '', maxResults = 24) => {
  const searchEmojisBySearchText = emojisData.filter(emoji => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }

    if (emoji.keywords.includes(searchText.toLowerCase())) {
      return true;
    }

    return false;
  });

  return searchEmojisBySearchText.splice(0, maxResults);
};