/*@for (item of [
    { title: 'Roflkopter', link: 'https://angular.dev' },
    { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
    { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ]; track item.title) {
    <a
      class="pill"
      href="{{ item.link }}"
      target="_blank"
      rel="noopener"
    >
      <span>{{ item.title }}</span>
    </a>
  }
  */