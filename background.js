if (!window.localStorage.getItem('hasSeenIntro')) {
    window.localStorage.setItem('hasSeenIntro', 'yep');
    chrome.tabs.create({
      url: 'osu://'
    });
  }