declare module 'download-git-repo' {
  interface Options {
    clone: boolean
  }

  function download(repository: string, destination: string, callback: (err: any) => void): void;
  function download(repository: string, destination: string, options: Options, callback: (err: any) => void): void;

  export default download;
}

declare module '*config.json' {
  interface IConfig {
    templateList: string[];
    gitPath: string
  }

  const Value: IConfig;
  export default Value;
}

