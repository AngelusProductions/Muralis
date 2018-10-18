require 'spec_helper'

describe Mural do
  it  { should have_valid(:title).when("Mural") }
  it  { should_not have_valid(:title).when(nil, "") }

  it  { should have_valid(:description).when("Very Mural") }
  it  { should_not have_valid(:description).when(nil, "") }

  it  { should have_valid(:location).when("Over There") }
  it  { should_not have_valid(:location).when(nil, "") }

  it  { should have_valid(:photo).when("/assets/mural.jpg") }
  it  { should_not have_valid(:photo).when(nil, "") }

  it  { should have_valid(:upvotes).when(2) }
  it  { should_not have_valid(:upvotes).when(nil) }

  it  { should have_valid(:downvotes).when(1) }
  it  { should_not have_valid(:downvotes).when(nil) }
end
