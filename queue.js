function createQueue() {
  return {
    elements: [],
    size() {
      return this.elements.length
    },
    add(e) {
      this.elements.push(e)
      return this.size()
    },
    peek() {
      return this.elements[0]
    },
    dequeue() {
      if (!this.size()) {
        throw new Error()
      }
      return this.elements.shift()
    },
  }
}

module.exports = { createQueue }
