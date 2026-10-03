#include<stdio.h>
int main()
{
int n;
scanf("%d",&n);
for(int i=2;i<=n;i++){
    if (n%i==0)
    {
        printf("the no is composite");
        break;
    }
    else{
        printf("the no is prime");

    }
}

return 0;
}
    
