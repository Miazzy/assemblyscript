declare function __alloc(size: usize, id: u32): usize;
declare function __realloc(ref: usize, size: usize): usize;
declare function __free(ref: usize): void;
declare function __retain(ref: usize): usize;
declare function __release(ref: usize): void;
declare function __collect(): void;
declare function __typeinfo(id: u32): u32;
declare function __instanceof(ref: usize, superId: u32): bool;
declare function __visit(ref: usize, cookie: i32): void;
declare function __visit_globals(cookie: u32): void;
declare function __visit_members(ref: usize, cookie: u32): void;
declare function __allocArray(length: i32, alignLog2: usize, id: u32, data?: usize): usize;
declare const ASC_RTRACE: boolean;