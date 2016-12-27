class Person
  def initialize(name, job)
    @name = name
    @job = job
  end
  attr_reader :name
  attr_writer :job
end
