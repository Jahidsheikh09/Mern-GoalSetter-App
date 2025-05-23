const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

//@desc    Get Goals
//@route   GET /api/goals
//@access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goalsData = await Goal.find();
  res.status(200).json(goalsData);
});

//@desc    Set Goals
//@route   POST /api/goals
//@access  Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

//@desc    update Goals
//@route   PUT /api/goals/:id
//@access  Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@desc    delete Goals
//@route   DELETE /api/goals/:id
//@access  Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }

  await goal.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
