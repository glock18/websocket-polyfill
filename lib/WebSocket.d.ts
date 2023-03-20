import { EventTarget } from "./events/EventTarget";
export declare class WebSocket extends EventTarget<WebSocketEventMap> {
    /**
     * @hidden
     */
    private client_;
    /**
     * @hidden
     */
    private connection_;
    /**
     * @hidden
     */
    private on_;
    /**
     * @hidden
     */
    private state_;
    constructor(url: string, protocols?: string | string[]);
    close(code?: number, reason?: string): void;
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    get url(): string;
    get protocol(): string;
    get extensions(): string;
    get readyState(): number;
    get bufferedAmount(): number;
    set binaryType(value: string);
    get binaryType(): string;
    get onopen(): Listener<"open">;
    get onclose(): Listener<"close">;
    get onmessage(): Listener<"message">;
    get onerror(): Listener<"error">;
    set onopen(listener: Listener<"open">);
    set onclose(listener: Listener<"close">);
    set onmessage(listener: Listener<"message">);
    set onerror(listener: Listener<"error">);
    /**
     * @hidden
     */
    private _Set_on;
    /**
     * @hidden
     */
    private _Handle_connect;
    /**
     * @hidden
     */
    private _Handle_close;
    /**
     * @hidden
     */
    private _Handle_message;
    /**
     * @hidden
     */
    private _Handle_error;
}
export declare namespace WebSocket {
    const CONNECTING = 0;
    const OPEN = 1;
    const CLOSING = 2;
    const CLOSED = 3;
}
declare type Listener<K extends keyof WebSocketEventMap> = (event: WebSocketEventMap[K]) => void;
export {};
//# sourceMappingURL=WebSocket.d.ts.map