'''Задача - Конец тренировок'''
t = 600
p = 0
n = int(input())

for i in range(1, n+1):
    t = t + p + 55
    if i % 2 == 0:
        p = 25
    else:
        p = 15

print(f'{t//60}:{t%60}')


'''Делимость'''

n = int(input())
m= int(input())

if max(n, m) % min(n, m) == 0:
    print(1)
else:
    print(0)

'''Стоимость покупки'''

A = int(input())
B = int(input())
N = int(input())

S = (A * 100 + B) * N

print(f"{S // 100} {S % 100}")

