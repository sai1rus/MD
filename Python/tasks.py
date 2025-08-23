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