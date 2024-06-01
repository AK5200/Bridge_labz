// eventloops
// helps js running async
// there are two stacks i.e v8 engine and one libuv (provided by the browser)
// v8 engine is the regular engine which is single threaded and performs only one task at a time
// if there is any process which might take time to complete, e.g api fetch, db fetch, those processes are transferred to the libuv 
// libuv is implemented using a multithreaded programming language like c++ and hence can perorm async and can process several processes at the same time.
// One the libuv is done with a process it pushes that to the event queue, which stores the completed processess.
// the event queue is managed by event loop which periodically checks whether the vall stack (v8) is empty or not,
// if yes then the event loop commands to push the process from event queue to the call satck.
// The delay which we give for functions is for task queue, for e.g setTimeout 200 will move the function to to event queue after 200.
// but it is not necessary that it will be pushed to the call stack.