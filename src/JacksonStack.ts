/**
 * The program is the class
 * for JacksonStacks
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-04
 */

class JacksonStack {
  // private array creation
  private readonly stackNum: number[] = []

  // gathers the pushed number
  Push(pushedNum: number): void {
    this.stackNum.push(pushedNum)
  }

  // prints the array
  StackArray(): void {
    console.log(this.stackNum)
  }
}

// exports file back to Main
export = JacksonStack
