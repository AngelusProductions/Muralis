require 'spec_helper'

describe Review do
  it  { should have_valid(:comment).when("Review") }

  it  { should have_valid(:rating).when(4) }
  it  { should_not have_valid(:rating).when(nil, -1, 11) }
end
