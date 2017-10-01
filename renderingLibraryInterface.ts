type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext;

interface RenderingLibrary {
    //Global control functions
    setUp: (canvas: HTMLCanvasElement, framesPerSecon: number) => void;
    pauseAll: () => void;
    restart: () => void;
    setBufferSize: (width: number, height: number) => null;
    setRenderMode: (renderMode: (sourceRenderingContext: RenderingContext, targetRenderingContext: RenderingContext) => void) => void;
    getContext: () => RenderingContext;
    chainWith: (renderingLibrary:RenderingLibrary) => void;
    setWorkingFolder: (directory: String) => void;
    getWorkingFolder: () => String;
    //Camera methods
    setCamera: (x: number, y: number, z: number) => void;
    getCamera: () => { x: number, y: number, z: number };
    moveCameraX: (dx: number) => void;
    moveCameraY: (dy: number) => void;
    moveCameraZ: (dz: number) => void;
    //Spritesheet loading functions
    loadSpritesheetJSONObject: (spritesheets: Array<any>) => void;
    //Object methods
    addObject: (spritesheet: string, state: string, x: number, y: number, z: number, isstatic: boolean) => number;
    deleteObject: (id: number) => void;
    clear: () => void;
    pause: (id: number) => void;
    unpause: (id: number) => void;
    setX: (id: number, x: number) => void;
    setY: (id: number, y: number) => void;
    setZ: (id: number, z: number) => void;
    setSpritesheet: (id: number, spritesheet: string) => void;
    setState: (id: number, state: string) => void;
    setParameter: (id: number, key: string, value: any) => void;
    setObjectTimer: (id: number, time: number) => void;
    getObjectTimer: (id: number) => number;
    setEndedCallback: (id: number, callback: Function) => void;
    //Extensibility point
    sendCommand: (command: string, commandArgs: Object) => any;
    //Other methods
    getSpritebox: (spritesheet: string, state: string) => any;
    //Debug methods
    debug: (debugHandler: (logMessage: string) => void) => void;
}