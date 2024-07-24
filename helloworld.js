let i = 0;

function fib(n)
{
    if (n == 0 || n == 1)
        return (1);
    else
        return (fib(n - 1) + fib(n - 2));
}

console.log(fib(i));