// There's nothing here really worth hiding for now.
export const demoVideo =
  'firebasestorage.googleapis.com/v0/b/bn-wvid.appspot.com/o/TheBunnyMovie.mp4';
export const demoToken =
  '?alt=media&token=ac6c7062-076f-49eb-a747-acd232767daa';

// Return filename without path/token
// If no token, omit arg or use false/any falsy value, else use token variable or any truthy value
export const shortFileName = (file, token) => {
  let filename;
  // If token value is truthy, oauth token should be removed from filename.
  if (token) {
    // arr is only created if needed
    let arr = file.split(/[?]/);
    arr.pop();
    filename = arr[arr.length - 1].split('/');
  } else {
    filename = file.split('/');
  }
  filename = filename[filename.length - 1].split('\\');
  return filename[filename.length - 1];
};
