from calc import add_numbers, multiply_numbers

def main():
    num1 = 5
    num2 = 3
    result_sum = add_numbers(num1, num2)
    print(f"Sum: {result_sum}")

    result_product = multiply_numbers(num1, num2)
    print(f"Product: {result_product}")

if __name__ == "__main__":
    main()
