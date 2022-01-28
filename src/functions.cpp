#include <emscripten.h>
#include <string>
using std::string;

EMSCRIPTEN_KEEPALIVE
string hello()
{
    return "Hello from C++.";
}
