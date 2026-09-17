---
title: "构建LLM"
date: 2025-12-01
slug: "project-llm"
description: "LLM 构建及预训练"
tags: ["项目"]
draft: false
---

> 项目地址：https://github.com/wuzgng/NLM.git

项目从 0 到 1 构建一个大语言模型，整个项目的理论和工程包括以下内容：
1. Tokenizer：正则预分词、特殊 token 处理和BPE 编码规则、 BPE 分词器训练；
2. 神经网络基础函数：SiLU 激活函数、Softmax、Linear 线性层、Embeding 词嵌入、RMSNorm 均方差层归一化、RoPE 旋转矩阵位置编码、Cross Entropy 交叉熵损失函数、Gradient Clipping 梯度剪裁；
3. Transformer 模型组件：Scaled Dot-Product Attention、Multi-Head Self-Attention with RoPE、SwiGLU FFN、Transformer Block（Pre-norm）、基于 Transformer 架构的语言模型；
4. Optimizer：AdamW optimizer
5. Data Batching：模型训练的数据载入
6. Checkpoint：保存和重载全部的训练状态，包括模型参数、优化器、动量缓冲区和迭代次数，确保训练过程可以暂停和恢复。

**Tokenizer 部分正则分词部分采用 GPT2 预分词正则表达式，BPE 规则以及 BPE 分词器训练部分见代码注释。**

## 理论部分

### 神经网络基础函数

### Transformer 基础模块

### Decoder-only Transformer 架构

### 优化器


## 工程部分

### 模型构建

### 数据载入

### 训练状态保存与记载

### 模型训练


## 结果
