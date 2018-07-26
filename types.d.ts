declare module 'download-git-repo' {
  interface Options {
    clone: boolean
  }

  function download(repository: string, destination: string, callback: (err: any) => void): void;
  function download(repository: string, destination: string, options: Options, callback: (err: any) => void): void;

  export default download;
}

declare module '*temp-list' {
  const Value: string[];
  export default Value;
}
