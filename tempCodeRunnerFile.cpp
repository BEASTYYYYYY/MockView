#include <iostream>
using namespace std;

int main() {
    int n = 3;
    while (9 * n - 2 > 20) {
        cout << "n = " << n << endl;
        n++;
    }
    return 0;
}