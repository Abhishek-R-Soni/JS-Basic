# num = 1003

# def replace(num, a, b):
#     nstr = ""
#     # print(id(nstr))

#     num = str(num)

#     for i in range(0,len(num)):
#         if int(num[i]) is a:
#             nstr +=str(b) 
#         else:
#             nstr += str(num[i]) 
#         # print(id(nstr))
#     return nstr

# print(replace(num,0,5))


A = [20, 17, 42, 25, 32, 32, 30, 32, 37, 9, 2, 33, 31, 17, 14, 40, 9, 12, 36, 21, 8, 33, 6, 6, 10, 37, 12, 26, 21, 3]
# cnt = 1 
# for i in A:
#     isPoint = sum(A[:cnt]) == sum(A[cnt+1:])
#     # print(sum(A[:cnt]), ' ', i, ' ', sum(A[cnt+1:]))
#     # print(sum(A[:cnt]) is sum(A[cnt+1:])) 
# if isPoint:
#     print(A[cnt])
#     break
# cnt = cnt+1
        
# cnt = 1
# lsum = 0
# rsum = sum(A[cnt+1:])
# for i in A:
#     # isPoint = sum(A[:cnt]) == sum(A[cnt+1:])
#     lsum = lsum + A[cnt-1]

#     if lsum == rsum:
#         print(cnt+1) 

#     try:
#         rsum = rsum - A[cnt+1]
#     except:
#         rsum = rsum - 0
#     cnt = cnt+1
    
# print(-1) 

# # A = [20, 17, 42, 25, 32, 32, 30, 32, 37, 9, 2, 33, 31, 17, 14, 40, 9, 12, 36, 21, 8, 33, 6, 6, 10, 37, 12, 26, 21, 3]

arr = 

s = 0
status = False

for i in range(n):
    s = s + arr[i]
    for j in range(i+1,n):
        s = s + arr[j] 
        
        if s >= sum:
            if s == sum:
                print(i+1, j+1)
                status = True
                break
            else:
                break
    if status:
        break
    s = 0
else:
    print(-1)








