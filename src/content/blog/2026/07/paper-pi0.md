---
title: "pi 0 论文"
date: 2026-07
slug: "paper-pi0"
description: "vla-pi0论文阅读与思考，重点理解其中的 flow match 动作生成的思想。"
draft: false
---

论文链接：https://arxiv.org/pdf/2410.24164

笔记链接：https://dcnlye1nf9c1.feishu.cn/wiki/CbbQwf6mhiDvzLkfHobceWtInVh?from=from_copylink

## 简介
$\pi_0$ 通过 VLM 的语义能力 + Flow Matching 的连续动作生成能力 + 跨机器人数据预训练 + 高质量任务后训练组合起来，建立了一套面向通用灵巧机器人控制的 Robot Foundation Model 范式。

### 论文贡献
- 提出基于 VLM 预训练和 Flow Matching 的通用机器人策略架构； 
- 提出通用机器人策略架构的 pre-training / post-training 训练方法。


## 数学原理（详情见笔记链接）
* Flow Matching
  * Probability Path
  * Conditional / Marginal Velocity
  * Flow Matching Loss
  * ODE / Euler Integration

## 模型架构（详情见笔记链接）
$\pi_0$ 将 VLM 的视觉语言理解能力与连续机器人动作生成结合，构建面向通用机器人控制的 VLA 模型。
* Action Chunking
* VLM Backbone
* Action Expert
* VLM-Action Interaction

## 训练方法（详情见笔记链接）
$\pi_0$ 采用类似大语言模型的“预训练 + 后训练”范式，通过大规模、多机器人、多任务数据获得通用能力，再利用高质量任务数据进行能力强化。
* Cross-Embodiment Pre-training
* Post-training

## 实验结果（详情见笔记链接）
通过 Zero-shot、语言指令跟随、新任务微调和复杂长时序操作等实验，验证 $\pi_0$ 的泛化能力、迁移能力与灵巧操作能力。