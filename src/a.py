def isPalindrome(x):
        x=str(x)
        l=len(x)
        for i in range((l//2)):
        if(l%2==0):
            for j in range(l-1,(l//2),-1):
                print(x[i]+x[j])
                if(x[i]!=x[j]):
                    return False
        return True
print(isPalindrome(121))