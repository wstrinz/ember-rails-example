class PlacesController < ApplicationController
  def index
    #@places = { id: 1, name: 'a place', latitude: 10.1, longitude: 10.2 }
    respond_to do |format|
      format.html
      format.json { render json: { places: Place.all } }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: { place: Place.first } }
    end
  end
end
