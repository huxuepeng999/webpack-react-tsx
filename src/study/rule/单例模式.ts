class I18NOther {
    private static instance: I18NOther;

    private module: any; // 动态被引入的模块

    public static getInstance(): I18NOther {
      if (this.instance == null) {
        this.instance = new I18NOther();
      }
      return this.instance;
    }

    getModule() {
      return this.module;
    }

    async init(uiId: string) {
    //   if (uiId === projectUiid.child) {
    //     const result = await import('./strings');
    //     this.module = new I18N(result.default);
    //   } else {
    //     const result = await import('./stringsOlder');
    //     this.module = new I18N(result.default);
    //   }
    }
  }

  export default I18NOther;
